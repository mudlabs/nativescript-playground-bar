exports.lightContent = function(page, timeout) {
  try {
    if (page.ios) {
      setTimeout(() => {
        page.frame.ios.controller.navigationBar.barStyle = UIBarStyle.Black;
      }, timeout || 10);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.darkContent = function(page, timeout) {
  try {
    if (page.ios) {
      setTimeout(() => {
        page.frame.ios.controller.navigationBar.barStyle = UIBarStyle.White;
      }, timeout || 10);
    }
  } catch (error) {
    console.log(error);
  }
};
