import { Vector3 } from "three";
const xAxis = new Vector3(1, 0, 0);
const yAxis = new Vector3(0, 1, 0);
const zAxis = new Vector3(0, 0, 1);
export function testBox3Collision(a, b, contact = {}) {
  // Minimum Translation Vector
  // ==========================
  const mtv = {
    distance: Number.MAX_VALUE,
    // Set current minimum distance (max float value so next value is always less)
    axis: new Vector3() // Axis along which to travel with the minimum distance
  };

  // Axes of potential separation
  // ============================
  // - Each shape must be projected on these axes to test for intersection:
  //
  // (1, 0, 0)                    A0 (= B0) [X Axis]
  // (0, 1, 0)                    A1 (= B1) [Y Axis]
  // (0, 0, 1)                    A1 (= B2) [Z Axis]

  // [X Axis]
  if (!testAxisStatic(xAxis, a.min.x, a.max.x, b.min.x, b.max.x, mtv)) return false;

  // [Y Axis]
  if (!testAxisStatic(yAxis, a.min.y, a.max.y, b.min.y, b.max.y, mtv)) return false;

  // [Z Axis]
  if (!testAxisStatic(zAxis, a.min.z, a.max.z, b.min.z, b.max.z, mtv)) return false;
  contact.isIntersecting = true;

  // Calculate Minimum Translation Vector (MTV) [normal * penetration]
  contact.nEnter = mtv.axis.normalize();

  // Multiply the penetration depth by itself plus a small increment
  // When the penetration is resolved using the MTV, it will no longer intersect
  contact.penetration = Math.sqrt(mtv.distance) * 1.001;
  return true;
}
function testAxisStatic(axis, minA, maxA, minB, maxB, mtv) {
  // Separating Axis Theorem
  // =======================
  // - Two convex shapes only overlap if they overlap on all axes of separation
  // - In order to create accurate responses we need to find the collision vector (Minimum Translation Vector)
  // - The collision vector is made from a vector and a scalar,
  //   - The vector value is the axis associated with the smallest penetration
  //   - The scalar value is the smallest penetration value
  // - Find if the two boxes intersect along a single axis
  // - Compute the intersection interval for that axis
  // - Keep the smallest intersection/penetration value
  const axisLengthSquared = axis.dot(axis);

  // If the axis is degenerate then ignore
  if (axisLengthSquared < 1.0e-8) return true;

  // Calculate the two possible overlap ranges
  // Either we overlap on the left or the right sides
  const d0 = maxB - minA; // 'Left' side
  const d1 = maxA - minB; // 'Right' side

  // Intervals do not overlap, so no intersection
  if (d0 <= 0.0 || d1 <= 0.0) return false;

  // Find out if we overlap on the 'right' or 'left' of the object.
  const overlap = d0 < d1 ? d0 : -d1;

  // The mtd vector for that axis
  const sep = axis.clone().multiplyScalar(overlap / axisLengthSquared);

  // The mtd vector length squared
  let sepLengthSquared = sep.dot(sep);

  // If that vector is smaller than our computed Minimum Translation Distance
  // use that vector as our current MTV distance
  if (sepLengthSquared < mtv.distance) {
    mtv.distance = sepLengthSquared;
    mtv.axis.copy(sep);
  }
  return true;
}