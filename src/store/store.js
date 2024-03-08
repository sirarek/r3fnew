import {create} from 'zustand';

const useDimensionStore = create((set,get) => ({
    orginalDimensions:{orginalX:5,orginalY:5},
    floorY:5,
    thickness:0.5,
    floorX:5,
    wallsHeight:2.5,
    wallsResrticrion: true,
    clickedChair: '',
    chairs:[],
    P:true,
    selectedFurniture: "chair",
    selectFurniture: ((item)=>{set(state=>({selectedFurniture:item}))}),

    roomsize :(state)=>{get({width:state.floorX, height:state.wallsHeight,depth:state.floorY})},

    setCameraControlsAcitve: (b)=>set(state=>({cameraControlsAcitve:b})),
    updateChairs:(updatedChair,msh)=>set(state=>({chairs:state.chairs.map(chair=>chair.id === updatedChair.id ? updatedChair : chair)}) ),
    clickChair: (id)=>set(state=>({clickedChair:id})),
    addChair:(chair)=>set(state=>({chairs:[...state.chairs,chair]})),
    changeWallsHeight:(height)=>set(state=>({wallsHeight:height})),
    changeX:(x)=>set(state=>({floorX:x})),
    changeY:(y)=>set(state=>({floorY:y})),
    changeThickness:(thickness)=>set(state=>({thickness:thickness})),
    setWallRestriction:(bool)=>set(state=>({wallsResrticrion:bool})),
    getActiveChair:()=>{
        const activeId = get().clickedChair;
        const chrs  = get().chairs;
        console.log('acitve id',activeId)
        const chair= chrs.find(ch=>ch.id == activeId)
        console.log('chair',chair

        )
        return chair

    },
    setFromDb:({floorX,floorY,wallsHeight,thickness,chrs})=>set(state=>({
        chairs:chrs,
        floorY,
        wallsHeight,
        floorX,
        thickness
    })),
    
    updateItemDimensions: (item,dim)=>{
        const chrs = get().chairs
        const itemIndex = chrs.findIndex(el=>el.id==item);
        const itemToUpdet = chrs[itemIndex];
        itemToUpdet.dimensions = {...itemToUpdet.dimensions,...dim}
        
        console.log("item to update: ",itemToUpdet)
        console.log("item dimType: ",dim)
}}));
export default useDimensionStore;
