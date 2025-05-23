// src/js/pages/formulario.js
$(function(){
  let fieldCount = 0;

  $('#addField').click(() => {
    fieldCount++;
    $('#fieldsContainer').append(`
      <div class="field-group mb-3" data-id="${fieldCount}">
        <label class="form-label">Campo ${fieldCount}</label>
        <div class="input-group">
          <input type="text" class="form-control field-name" placeholder="Etiqueta">
          <select class="form-select field-type">
            <option value="text">Texto</option>
            <option value="number">Número</option>
            <option value="date">Fecha</option>
            <option value="file">Archivo</option>
          </select>
          <button type="button" class="btn btn-outline-danger remove-field">
            <i class="bi bi-x"></i>
          </button>
        </div>
      </div>
    `);
  });

  $('#fieldsContainer').on('click', '.remove-field', function() {
    $(this).closest('.field-group').remove();
  });

  $('#customForm').submit(function(e){
    e.preventDefault();
    const name = $('#formName').val().trim();
    const fields = [];
    $('.field-group').each(function(){
      fields.push({
        label: $(this).find('.field-name').val().trim(),
        type:  $(this).find('.field-type').val()
      });
    });
    console.log({ name, fields });
    alert('Formulario guardado. Mira la consola (F12).');
  });
});
