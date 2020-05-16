const initPixi = () => {
    const app = new PIXI.Application({width: innerWidth, height: innerHeight});
    document.querySelector('.water-effects-wrap').appendChild(app.view);

    let waterBackground = new PIXI.Sprite.from('./assets/image/sand-background_1.jpg');
    waterBackground.width = window.innerWidth;
    waterBackground.height = window.innerHeight;
    app.stage.addChild(waterBackground);

    displacementSpriteStyle = new PIXI.Sprite.from('./assets/image/clouds.png');
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSpriteStyle);
    displacementSpriteStyle.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    app.stage.addChild(displacementSpriteStyle);
    app.stage.filters = [displacementFilter];
    
    app.renderer.view.style.transform = 'scale(1.02)';
    displacementSpriteStyle.scale.x = 6;
    displacementSpriteStyle.scale.y = 4;

    animateWater();
}

const animateWater = () => {
    displacementSpriteStyle.x += 8;
    displacementSpriteStyle.y += 2;
    requestAnimationFrame(animateWater);
}

initPixi();
