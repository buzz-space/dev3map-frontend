import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
const EllipticalOrbit = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let angle = 0;
    const radiusX = canvas.width / 2; // horizontal radius of the ellipse
    const radiusY = canvas.height / 2; // vertical radius of the ellipse
    const centerX = canvas.width / 2; // center x-coordinate of the canvas
    const centerY = canvas.height / 2; // center y-coordinate of the canvas
    // Create a new image element
    const planetImage = new Image();
    planetImage.src = '/imgs/planet1.png'; // Replace with the path to your planet image

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const scale = window.devicePixelRatio;

      canvas.width = width * scale;
      canvas.height = height * scale;
      context.scale(scale, scale);

      context.clearRect(0, 0, canvas.width, canvas.height);

      // Save the current canvas state
      context.save();

      // Rotate the canvas by 35 degrees to the right
      context.translate(centerX, centerY);
      context.rotate((8 * Math.PI) / 180);
      context.translate(-centerX, -centerY);

      context.strokeStyle = '#ffffff66'; // Replace with your desired color

      // Draw the ellipse
      context.beginPath();
      context.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
      context.stroke();

      // Calculate planet position
      const planetX = centerX + radiusX * Math.cos(angle);
      const planetY = centerY + radiusY * Math.sin(angle);

      // Draw the planet image
      context.drawImage(planetImage, planetX - 10, planetY - 10, 20, 20); // Adjust the size and position as needed

      // Restore the canvas state
      context.restore();

      angle += 0.01; // Increase the angle for next frame
      requestAnimationFrame(draw);
    };
    // resizeCanvas();
    // window.addEventListener('resize', resizeCanvas);
    draw();
    // return () => {
    //     window.removeEventListener('resize', resizeCanvas);
    // };
  }, []);

  return (
    <div className={styles['orbit']}>
      <canvas ref={canvasRef} className={styles['canvas']} />
    </div>
  );
};

export default EllipticalOrbit;
