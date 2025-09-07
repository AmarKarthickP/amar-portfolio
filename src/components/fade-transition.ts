import { Animation } from '@ionic/core';

export const fadeTransition = (baseEl: HTMLElement): Animation => {
  const enteringEl = baseEl.querySelector(':scope > .ion-page') as HTMLElement;
  const animation = new Animation();

  animation
    .addElement(enteringEl)
    .duration(300)
    .fromTo('opacity', 0, 1);

  return animation;
};
