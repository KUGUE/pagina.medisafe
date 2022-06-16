const ctrselectUnit = document.getElementById('selectUnit');
const ctr = document.getElementById('ctr1stDose')
var oneDose = `<div class="form-floating cs-form mb-3" id="ctr1stDose">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la primera dosis?</label>
</div>`
var twoDoses = `<div class="form-floating cs-form mb-3" id="ctr1stDose">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la primera dosis?</label>
</div>
<div class="form-floating cs-form mb-3">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la segunda dosis?</label>
</div>`
var threeDoses = `<div class="form-floating cs-form mb-3" id="ctr1stDose">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la primera dosis?</label>
</div>
<div class="form-floating cs-form mb-3">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la segunda dosis?</label>
</div>
<div class="form-floating cs-form mb-3">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la tercera dosis?</label>
</div>`
var fourDoses = `<div class="form-floating cs-form mb-3" id="ctr1stDose">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la primera dosis?</label>
</div>
<div class="form-floating cs-form mb-3">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la segunda dosis?</label>
</div>
</div><div class="form-floating cs-form mb-3">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la tercera dosis?</label>
</div>
</div><div class="form-floating cs-form mb-3">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la cuarta dosis?</label>
</div>`
var sixDoses = `<div class="form-floating cs-form mb-3" id="ctr1stDose">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la primera dosis?</label>
</div>
<div class="form-floating cs-form mb-3">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la segunda dosis?</label>
</div>
<div class="form-floating cs-form mb-3">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la tercera dosis?</label>
</div>
</div><div class="form-floating cs-form mb-3">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la cuarta dosis?</label>
</div>
</div><div class="form-floating cs-form mb-3">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la quinta dosis?</label>
</div>
</div><div class="form-floating cs-form mb-3">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar la sexta dosis?</label>
</div>`
var everySixHours = `<div class="form-floating cs-form mb-3" id="ctr1stDose">
<input type="time" class="form-control" value="" id="selectTime">
<label for="selectTime">¿Cuándo necesita usted tomar su primera dosis?</label>
</div>`;
var aux;
var aux2;

function selectUnit() {
    var selectValue = document.getElementById("floatingSelectType").value;
    if (selectValue == 1) {
        ctrselectUnit.innerHTML = `<select class="form-select" id="floatingSelectGrid">
        <option selected>Elige la unidad</option>
        <option value="1">g</option>
        <option value="2">IU</option>
        <option value="3">mcg</option>
        <option value="4">mEq</option>
    </select>
    <label for="floatingSelectGrid">Unidad</label>`;
    }
    if (selectValue == 2) {
        ctrselectUnit.innerHTML = `<select class="form-select" id="floatingSelectGrid">
        <option selected>Elige la unidad</option>
        <option value="1">g</option>
        <option value="2">IU</option>
        <option value="3">mcg-ml</option>
        <option value="4">mEq</option>
        <option value="5">mg</option>
        <option value="6">mg/ml</option>
        <option value="7">mL</option>
        <option value="8">%</option>
    </select>
    <label for="floatingSelectGrid">Unidad</label>`;
    }
    if (selectValue == 3) {
        ctrselectUnit.innerHTML = `<select class="form-select" id="floatingSelectGrid">
        <option selected>Elige la unidad</option>
        <option value="1">IU</option>
        <option value="2">mcg</option>
        <option value="3">mcg/ml</option>
        <option value="4">mEq</option>
        <option value="5">mg</option>
        <option value="6">mg/ml</option>
        <option value="7">mL</option>
        <option value="8">%</option>
    </select>
    <label for="floatingSelectGrid">Unidad</label>`;
    }
    if (selectValue == 4) {
        ctrselectUnit.innerHTML = `<select class="form-select" id="floatingSelectGrid">
        <option selected>Elige la unidad</option>
        <option value="1">g</option>
        <option value="2">mcg</option>
        <option value="3">mg</option>
    </select>
    <label for="floatingSelectGrid">Unidad</label>`;
    }
    if (selectValue == 5) {
        ctrselectUnit.innerHTML = `<select class="form-select" id="floatingSelectGrid">
        <option selected>Elige la unidad</option>
        <option value="1">IU</option>
        <option value="2">mcg</option>
        <option value="3">mcg/ml</option>
        <option value="4">mEq</option>
        <option value="5">mg/ml</option>
        <option value="6">%</option>
    </select>
    <label for="floatingSelectGrid">Unidad</label>`;
    }
    if (selectValue == 6) {
        ctrselectUnit.innerHTML = `<select class="form-select" id="floatingSelectGrid">
        <option selected>Elige la unidad</option>
        <option value="1">mg</option>
        <option value="2">mg/ml</option>
    </select>
    <label for="floatingSelectGrid">Unidad</label>`;
    }
    if (selectValue == 7) {
        ctrselectUnit.innerHTML = `<select class="form-select" id="floatingSelectGrid">
        <option selected>Elige la unidad</option>
        <option value="1">Por boca</option>
        <option value="2">Tópico(a) (en la piel)</option>
        <option value="3">Por la nariz / en los ojos / los oidos</option>
        <option value="4">Inhalado</option>
        <option value="5">Por una inyección</option>
        <option value="6">Por el recto / la vagina</option>
    </select>
    <label for="floatingSelectGrid">Unidad</label>`;
    }
}

function newDosis() {
    var selectValue = document.getElementById("floatingSelectEveryOnce").value;
    if (selectValue == 1) {
        ctr.innerHTML = oneDose;
    }
    if (selectValue == 2) {
        ctr.innerHTML = twoDoses;
    }
    if (selectValue == 3) {
        ctr.innerHTML = threeDoses;
    }
    if (selectValue == 4) {
        ctr.innerHTML = fourDoses;
    }
    if (selectValue == 5) {
        ctr.innerHTML = sixDoses;
    }
    if (selectValue == 6) {
        ctr.innerHTML = everySixHours;
    }
    if (selectValue == 7) {
        ctr.innerHTML = "";
    }
}