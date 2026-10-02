function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      //Dibujar un rectangulo
      /*ctx.fillStyle = "green";
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);*/

      //Dibujar el triangulo
      ctx.fillStyle = "blue";
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();

      //dibujar la carita feliz
      /*ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true);*/


    }
  }