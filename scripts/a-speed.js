function tick(dt) {
    if (RightController.ThumbstickPressed) {
        PlayerSettings.JumpMultiplier = 8;
        PlayerSettings.MaxJumpSpeed = 50;
    }
    else {
        PlayerSettings.JumpMultiplier = 1.5;
        PlayerSettings.MaxJumpSpeed = 6.5;
    }
}