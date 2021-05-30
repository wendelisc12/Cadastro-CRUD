// Compiled using marko@4.23.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/registro$1.0.0/templates/alunos.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Alunos</title><link href=https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css rel=stylesheet integrity=sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl crossorigin=anonymous><script src=https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js integrity=sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js integrity=sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG crossorigin=anonymous></script></head><body>");

  var $for$0 = 0;

  marko_forOf(data.error_messages, function(message, index) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div class=\"alert alert-danger alert-dismissible fade show\" role=alert><strong>" +
      marko_escapeXml(message) +
      "</strong><button type=button class=btn-close data-bs-dismiss=alert aria-label=Close></button></div>");
  });

  var $for$1 = 0;

  marko_forOf(data.success_messages, function(message, index) {
    var $keyScope$1 = "[" + (($for$1++) + "]");

    out.w("<div class=\"alert alert-success alert-dismissible fade show\" role=alert><strong>" +
      marko_escapeXml(message) +
      "</strong><button type=button class=btn-close data-bs-dismiss=alert aria-label=Close></button></div>");
  });

  out.w("<div class=\"d-flex justify-content-center my-4\"><div class=\"bg-light px-3 py-4\" style=\"box-shadow:0 0 10px rgba(0, 0, 0, 0.315); width:700px;\"><div class=text-center><h1>Alunos</h1></div><div class=\"d-flex justify-content-end\"><a href=/form class=\"btn btn-success rounded rounded-circle\"><svg xmlns=http://www.w3.org/2000/svg width=30 height=40 fill=currentColor class=\"bi bi-plus\" viewBox=\"0 0 16 16\"><path d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"></path></svg></a></div><table class=\"table table-responsive table-striped mt-1\"><thead><th>ID</th><th>Aluno</th><th>Curso</th><th class=text-center>Opções</th></thead>");

  var $for$2 = 0;

  marko_forOf(data.results, function(aluno, index) {
    var $keyScope$2 = "[" + (($for$2++) + "]");

    out.w("<tr class=w-100><td class=align-middle>" +
      marko_escapeXml(aluno.id) +
      "</td><td class=align-middle>" +
      marko_escapeXml(aluno.nome) +
      "</td><td class=align-middle>" +
      marko_escapeXml(aluno.curso) +
      "</td><td class=text-center><div class=btn-group><a" +
      marko_attr("href", "/form/" + (aluno.id == null ? "" : aluno.id)) +
      " class=\"btn btn-primary d-flex align-items-center\"><svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=currentColor class=\"bi bi-pencil\" viewBox=\"0 0 16 16\"><path d=\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"></path></svg></a><a" +
      marko_attr("href", "/alunos/delete/" + (aluno.id == null ? "" : aluno.id)) +
      " class=\"btn btn-danger d-flex align-items-center\"><svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=currentColor class=\"bi bi-trash\" viewBox=\"0 0 16 16\"><path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"></path><path fill-rule=evenodd d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"></path></svg></a></div></td></tr>");
  });

  out.w("</table></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "41");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/registro$1.0.0/templates/alunos.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
