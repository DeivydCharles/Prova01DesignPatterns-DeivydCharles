class Button {
  render() {
    throw new Error("Método render() precisa ser implementado.");
  }
}

class WindowUI {
  render() {
    throw new Error("Método render() precisa ser implementado.");
  }
}

class LightButton extends Button {
  render() {
    return "Botão branco criado";
  }
}

class DarkButton extends Button {
  render() {
    return "Botão preto criado";
  }
}

class LightWindow extends WindowUI {
  render() {
    return "Janela clara aberta";
  }
}

class DarkWindow extends WindowUI {
  render() {
    return "Janela escura aberta";
  }
}

class UIFactory {
  createButton() {
    throw new Error("Método createButton() precisa ser implementado.");
  }

  createWindow() {
    throw new Error("Método createWindow() precisa ser implementado.");
  }
}

class LightThemeFactory extends UIFactory {
  createButton() {
    return new LightButton();
  }

  createWindow() {
    return new LightWindow();
  }
}

class DarkThemeFactory extends UIFactory {
  createButton() {
    return new DarkButton();
  }

  createWindow() {
    return new DarkWindow();
  }
}

function createUI(factory) {
  const button = factory.createButton();
  const windowUI = factory.createWindow();

  console.log(button.render());
  console.log(windowUI.render());
}

const theme = "dark";
let factory;

if (theme === "light") {
  factory = new LightThemeFactory();
} else {
  factory = new DarkThemeFactory();
}

createUI(factory);
