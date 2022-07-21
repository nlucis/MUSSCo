// Titlebar Config
const titleBar = (titleBar) => {
  const width = 600;
  const height = 100;

  titleBar.preload = () => {}

  titleBar.setup = () => {
    const canvas = titleBar.createCanvas(width, height);
    canvas.id('title-bar'); // Reassign canvas ID to something more semantic than "defaultCanvas0"
  }

  titleBar.draw = () => {
    titleBar.background(0);
    titleBar.fill(255);
    titleBar.rect((width / 2) - 25, (height / 2) - 25, 50, 50, 6);
  }
}

const titleBarInstance = new p5(titleBar);

// Sidebar Config
const sideBarButton = (sidebar) => {
  const width = 50;
  const height = 800;

  sidebar.preload = () => {}
  // sidebar.
}