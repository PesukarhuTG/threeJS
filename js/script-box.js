const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer();
let cube_geometry, cube_material, cube;
let cube_texture, loader;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.background = new THREE.Color( 0x000000 );


cube_geometry = new THREE.CubeGeometry(2, 2, 2);
cube_material = new THREE.MeshNormalMaterial();


loader = new THREE.TextureLoader();
cube_material = new THREE.MeshBasicMaterial( {
    map: loader.load("box.jpg"),
} );


cube = new THREE.Mesh( cube_geometry, cube_material );

scene.add( cube );

camera.position.z = 20;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    camera.position.z -=0.08;
}

animate();