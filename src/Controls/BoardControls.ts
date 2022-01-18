function initInfoControl(
  dimensions: [number, number],
  resolution: number
) : HTMLElement {
  const control: HTMLElement = document.createElement('div');

  control.classList.add('board-controls__info');
  control.innerHTML = `
    <div>
      <label for="resolution-read">Resolution</label>
      <input type="number" name="resolution-read" value="${resolution}" readonly>
    </div>
    <div>
      <label for="height-read">Height</label>
      <input type="number" name="height-read" value="${dimensions[1]}" readonly>
      <label for="width-read">Width</label>
      <input type="number" name="width-read" value="${dimensions[0]}" readonly>
    </div>
  `;

  return control;
}

function initResolutionControl() : HTMLElement {
  const control: HTMLElement = document.createElement('div');

  control.classList.add('board-controls__resolution');
  control.innerHTML = `
    <label for="resolution">Resolution</label>
    <input type="range" name="resolution" min="1" max="100" step="1" value="1">
  `;

  return control;
}

function initControls(
  dimensions: [number, number],
  resolution: number
) : HTMLElement {
  const controls: HTMLElement = document.createElement('div');

  controls.classList.add('board-controls');
  controls.innerHTML = `
    <style>
      .board-controls {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        max-width: 200px;
        background-color: rgba(0, 0, 0, 0.75);
      }
      .board-controls > *:not(style) {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
      }
    </style>
  `;

  const resolutionControl: HTMLElement = initResolutionControl();
  const infoControl: HTMLElement = initInfoControl(dimensions, resolution);

  controls.appendChild(resolutionControl);
  controls.appendChild(infoControl);

  return controls;
}

export default {
  initControls,
};
