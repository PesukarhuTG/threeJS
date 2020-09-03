//scene, camera, render
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let sphere_texture, loader; //►

scene.background = new THREE.Color( 0x000000 );

// ======================== sphere

const geometrySphere = new THREE.SphereGeometry( 1, 60, 60 );

loader = new THREE.TextureLoader();
materialSphere = new THREE.MeshBasicMaterial( {
    map: loader.load("earth.jpg"),
} );

const sphere = new THREE.Mesh( geometrySphere,materialSphere );

scene.add( sphere );

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 5;

function animate() {
  
    requestAnimationFrame( animate );
    sphere.rotation.y += 0.004;
    renderer.render( scene, camera );

}

animate();