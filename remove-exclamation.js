//remover todos los caracteres que matcheen con el que se quiere eliminar
const remove = (s) => s.replace(/!/g, "");

// matchea con todos los que aparecen al final
const remove = (s) => s.replace(/!+$/, "");

const remove2 = (s) => {
  str = s;
  while (str.endsWith("!")) {
    str = str.replace(/.$/, "");
  }
  return str;
};

console.log(remove2("Hi!!!"));
console.log(remove2("!!!Hi!!!"));
