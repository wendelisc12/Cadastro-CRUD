// Compiled using marko@4.23.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/registro$1.0.0/templates/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Cadastro</title><link href=https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css rel=stylesheet integrity=sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl crossorigin=anonymous><script src=https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js integrity=sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js integrity=sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG crossorigin=anonymous></script></head><body class=\"d-flex justify-content-center border align-items-center\" style=height:100vh;><div class=\"bg-light rounded px-3 py-4 border\" style=\"width: 500px; box-shadow:0 0 10px rgba(0, 0, 0, 0.100);\"><div class=text-center><h1>Cadastro</h1></div><form action=/alunos method=post class=\"d-flex flex-column\"><input type=hidden name=id" +
    marko_attr("value", data.id) +
    "><div class=\"input-group mt-3\"><span class=input-group-text><svg xmlns=http://www.w3.org/2000/svg width=25 height=25 fill=currentColor class=\"bi bi-person\" viewBox=\"0 0 16 16\"><path d=\"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z\"></path></svg></span><input type=text required name=nome class=form-control placeholder=nome" +
    marko_attr("value", data.nome) +
    "></div><div class=\"input-group mt-3\"><span class=input-group-text><svg xmlns=http://www.w3.org/2000/svg width=25 height=25 fill=currentColor class=\"bi bi-envelope\" viewBox=\"0 0 16 16\"><path d=\"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z\"></path></svg></span><input type=email class=form-control required name=email placeholder=email" +
    marko_attr("value", data.email) +
    "></div><div class=mt-3><select name=curso value required class=\"form-control form-select\"><option value" +
    marko_attr("selected", data.curso == "") +
    " disabled></option><option value=ads" +
    marko_attr("selected", data.curso == "ads") +
    ">Tecnólogo em ADS</option><option value=ipi" +
    marko_attr("selected", data.curso == "ipi") +
    ">Tec. em Informática para Internet</option><option value=qualidade" +
    marko_attr("selected", data.curso == "qualidade") +
    ">Tec. em Gestão de Qualidade</option></select></div><div class=\"d-flex input-group mt-3\"><button type=submit class=\"btn btn-primary w-50\">Salvar</button><button type=reset class=\"btn btn-danger w-50\">Cancelar</button></div></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "32");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/registro$1.0.0/templates/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
