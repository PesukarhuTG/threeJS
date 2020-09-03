//scene, camera, render
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let sphere_texture, loader; //►

scene.background = new THREE.Color( 0x000000 );

// ======================== sphere

const geometrySphere = new THREE.SphereGeometry( 2, 60, 60 );

loader = new THREE.TextureLoader();
materialSphere = new THREE.MeshBasicMaterial( {
    map: loader.load("earth.jpg"),
} );

const sphere = new THREE.Mesh( geometrySphere,materialSphere );

sphere.position.y = -3;

scene.add( sphere );

let angel = 0; //corner

camera.position.z = 20;

function animate() {
  
    requestAnimationFrame( animate );
    sphere.position.y += Math.sin(angel)/20;
    sphere.position.x += Math.cos(angel)/20;
    angel += Math.PI/320;
    sphere.rotation.y += 0.004;
    renderer.render( scene, camera );

}

animate();