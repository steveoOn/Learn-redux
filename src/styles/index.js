class Style {
  color = {
    W: "white"
  };

  zIndex = {
    navBar: 20,
    menu: 10,
    mask: 5
  };

  screen = {
    XXL: 1600,
    XL: 1300,
    L: 1080,
    M: 660,
    S: 440
  };

  fontSize = {
    XXL: this.fib(8),
    XL: this.fib(7),
    L: this.fib(6),
    M: this.fib(5)
  };

  media(size) {
    // this.screen[key] 获取对象的 key 的值
    return `(max-width: ${this.screen[size]}px)`;
  }

  fib(n, ac1 = 1, ac2 = 1) {
    if (n <= 1) {
      return ac2;
    }
    return this.fib(n - 1, ac2, ac1 + ac2);
  }
}

// console.log("obj.key:", new Style().screen["M"]);

export default new Style();
