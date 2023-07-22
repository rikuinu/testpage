//canvasの設定
const canvas = document.getElementById("canvas");
const wrapper = document.getElementById("wrapper");
const ctx = canvas.getContext("2d");

canvas.width = wrapper.offsetWidth;
canvas.height = wrapper.offsetHeight;
let cW = canvas.width;
let cH = canvas.height;
console.log(cW + "," + cH);

//画面サイズ変更時canvasの大きさ修正
window.addEventListener("resize", ()=>{
    canvas.width = wrapper.offsetWidth;
    canvas.height = wrapper.offsetHeight;
    cW = canvas.width;
    cH = canvas.height;

})

/*
let place0 = [];
let Y_tmp = [];
let Z_tmp = [];
let thetaX0 = 0;
let thetaY0 = 0;
for(let x=0; x<16; x++){
    for(let y=0; y<16; y++){
        for(let z=0; z<16; z++){
            let place0_tmp = {};
            place0_tmp.X = (x-7.5);
            place0_tmp.Y = (y-7.5);
            place0_tmp.Z = (z-7.5);

            Z_tmp.push(place0_tmp);
        }
        Y_tmp.push(Z_tmp);
    }
    place0.push(Y_tmp);
}
*/

canvas.addEventListener("mousemove", (event)=>{
    ctx.fillStyle = "#ffffff"
    ctx.clearRect(0, 0, cW, cH);

    let thetaX = ((event.clientX / cW) * (Math.PI)) - Math.PI / 2;
    let thetaY = ((event.clientY / cH) * (Math.PI)) - Math.PI / 2;

    for(let x=0; x<16; x++){
        for(let y=0; y<16; y++){
            for(let z=0; z<16; z++){
                
                let eyeplace = 500;
                let point_distance = 100;
                let px_rx = (x-7.5) * Math.cos(thetaX) - (z-7.5) * Math.sin(thetaX); 
                let py_rx = y-7.5; 
                let pz_rx = (x-7.5) * Math.sin(thetaX) + (z-7.5) * Math.cos(thetaX); 

                let px =    px_rx * point_distance; 
                let py =    (py_rx * Math.cos(thetaY) - pz_rx * Math.sin(thetaY)) * point_distance; 
                let pz =    (py_rx * Math.sin(thetaY) + pz_rx * Math.cos(thetaY)) * point_distance + 2000; 

                let X_screen = cW/2 + px * (eyeplace / (eyeplace + pz));
                let Y_screen = cH/2 + py * (eyeplace / (eyeplace + pz));
                
                ctx.fillStyle = "#ffffff"
                ctx.fillRect(X_screen, Y_screen, 1, 1);
                //place0[x][y][z].X = X_place;
                //place0[x][y][z].Y = Y_place;
                //place0[x][y][z].Z = Z_place;

                //thetaX0 = thetaX;
                //thetaY0 = thetaY;
                //console.log(pz);
            }
        }
    }
});
