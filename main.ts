input.onButtonPressed(Button.A, function () {
    DLPLmultibox.schreibeText(nrMatrix.mitte, "A", 0xff0000)
    basic.pause(2000)
    DLPLmultibox.schreibeText(nrMatrix.mitte, "31,17,17,31", 0x007fff)
})
input.onButtonPressed(Button.B, function () {
    DLPLmultibox.schreibeText(nrMatrix.links, "Wolf", 0xffff00)
    basic.pause(5000)
    DLPLmultibox.loescheMatrix(nrMatrix.links)
})
DLPLmultibox.definitionMatrix(nrMatrix.mitte, defMatrix.m0, 1)
DLPLmultibox.definitionMatrix(nrMatrix.links, defMatrix.m1, 2)
DLPLmultibox.all_strip_settings(150, 2000)
