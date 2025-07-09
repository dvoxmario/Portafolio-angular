import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements AfterViewInit {
  socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/john-chaverra', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/dvoxmario', icon: 'github' },
    { name: 'Instagram', url: 'https://www.instagram.com/johnmario19/', icon: 'instagram' }
  ];

  ngAfterViewInit(): void {
    this.runMatrixEffect();
    this.observeThemeChanges();
  }

  isDarkMode(): boolean {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  runMatrixEffect() {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      const dark = this.isDarkMode();
      ctx.fillStyle = dark ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = dark ? '#0f0' : '#333'; // Verde en oscuro, gris oscuro en claro
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    setInterval(draw, 33);

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  observeThemeChanges() {
    const observer = new MutationObserver(() => {
      const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
      const ctx = canvas?.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
  }
}
