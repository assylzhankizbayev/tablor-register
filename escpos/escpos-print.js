const moment = require("moment");
const escpos = require("escpos");
escpos.USB = require("escpos-usb");

const device = new escpos.USB();
const options = { encoding: "cp866" };
const printer = new escpos.Printer(device, options);

function print(number) {
  device.open(function (error) {
    printer
      .align("ct")
      .feed(3)
      .size(1, 1)
      .text("ГП-3")
      .feed(2)
      .size(10, 10)
      .text(number)
      .feed(2)
      .size(1, 1)
      .text(moment().format("HH:mm:ss DD-MM-YYYYг."))
      .feed()
      .cut(false)
      .close();
  });
}

module.exports = print;
