function tick(dt) {
    if (RightController.GripValue >= 0.5) {
        PlayerSettings.JumpMultiplier = 2:
        PlayerSettings.MaxJumpSpeed = 7.5;
    }
    else {
        PlayerSettings.JumpMultiplier = 1.5;
        PlayerSettings.MaxJumpSpeed = 6.5;
    }
}
