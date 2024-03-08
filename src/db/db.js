import { createClient } from "@supabase/supabase-js";
import {exp} from "three/examples/jsm/nodes/math/MathNode";
const db =  createClient(   "https://giufogbsmzcnyrajtwko.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpdWZvZ2JzbXpjbnlyYWp0d2tvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMjg2NjcsImV4cCI6MjAxNjkwNDY2N30.QJ1H64dC_FFfHiImdZtnrTtg8s8oPMQ2OoRI0k0y7xM");

export async  function getAllProjects(){
    const data =await  db.from("r3f").select();
    return data

}

export async function getProject(id){
    const {data,error} = await db.from("r3f").select().eq("uuid",id)

    return data;
}

export async function saveData(values){

    const { data, error } = await db
        .from('r3f')
        .upsert({data:JSON.stringify(values)})
        .select()
}