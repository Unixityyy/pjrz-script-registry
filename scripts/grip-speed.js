function tick(dt) {
    if (RightController.GripValue >= 0.5) {
        PlayerSettings.JumpMultiplier = 2.75;
        PlayerSettings.MaxJumpSpeed = 8;
    } else {
        PlayerSettings.JumpMultiplier = 1.5;
        PlayerSettings.MaxJumpSpeed = 6.5;
    }
}
