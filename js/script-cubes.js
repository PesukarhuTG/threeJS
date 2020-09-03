const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.background = new THREE.Color( 0x000000 );

// ======================== group

const geometryCubes = new THREE.BoxGeometry(1, 1, 1);
const materialCubes = new THREE.MeshNormalMaterial();
let group = new THREE.Object3D();


for (let i=0; i<100; i++) {
    const cubes = new THREE.Mesh( geometryCubes,materialCubes );
    cubes.position.x = Math.random()*30-15;
    cubes.position.y = Math.random()*30-15;
    cubes.position.z = Math.random()*5-15;
    cubes.rotation.z = Math.random()*360*180/Math.PI;
    group.add(cubes);
}
scene.add( group );

camera.position.z = 20;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );

    camera.position.z -=0.08;
}

animate();