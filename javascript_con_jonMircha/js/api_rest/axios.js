 //export const { default: axios } = require("axios");

/* const { default: axios } = require("axios"); */

const callGlobalDocument = document;
const $table = callGlobalDocument.querySelector(".crud-table");
const $form = callGlobalDocument.querySelector(".crud-form");
const $title = callGlobalDocument.querySelector(".crud-title");
const $template = callGlobalDocument.getElementById("crud-template").content;
const $fragment = callGlobalDocument.createDocumentFragment();


const getAll = async () => {
    try {
        let respo = await axios.get("http://localhost:8000/api/codeeditor"),
        json = await respo.data;
        console.log(json);
        json.forEach(e => {
            $template.querySelector(".name").textContent = e.name;
            $template.querySelector(".statement").textContent = e.statement;
            $template.querySelector(".result").textContent = e.result;
            $template.querySelector(".edit").dataset.id = e.id;
            $template.querySelector(".edit").dataset.name = e.name;
            $template.querySelector(".edit").dataset.statement = e.statement;
            $template.querySelector(".edit").dataset.result = e.result;
            $template.querySelector(".delete").dataset.name = e.name;

            let $clone = callGlobalDocument.importNode($template,true);
            $fragment.appendChild($clone)
        });

        $table.querySelector("tbody").appendChild($fragment)
    } catch (err) {
        let message = err.statusText || "Ocurrió un Error";
        $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}:${message}</b></p>`)
        
    }
}

callGlobalDocument.addEventListener("DOMContentLoaded", getAll);

callGlobalDocument.addEventListener("submit", async e => {
    if (e.target === $form) {
        e.preventDefault();
        if (!e.target.id.value) {
            //Create - POST
            try {
                let options = {
                    method: "POST",
                    headers: {
                        "Content-type":"application/json;charset=utf-8"
                    },
                    data: JSON.stringify({
                        name: e.target.name.value,
                        statement: e.target.statement.value,
                        result: e.target.result.value
                    })
                }
                let respo = await axios("http://localhost:8000/api/codeeditor/store/", options);
                let json = await respo.data;
        
                location.reload();


            } catch (error) {
                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${error.status}: ${message}</b></p>`);
            }
        }else{
            //Update - 
            try {
                let options = {
                    method: "PATCH",
                    headers: {
                        "Content-type":"application/json;charset=utf-8"
                    },
                    data: JSON.stringify({
                        name: e.target.name.value,
                        statement: e.target.statement.value,
                        result: e.target.result.value
                    })
                }
                let respo = await axios(`http://localhost:8000/api/codeeditor/update/${e.target.id.value}`, options);
                let json = await respo.data;       
               


            } catch (error) {
                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${error.status}: ${message}</b></p>`);
            }
        }
    }
});
callGlobalDocument.addEventListener("click", async e => {
    if(e.target.matches(".edit")){
        $title.textContent = "Editar";
        $form.id.value = e.target.dataset.id;
        $form.name.value = e.target.dataset.name;
        $form.statement.value = e.target.dataset.statement;
        $form.result.value = e.target.dataset.result;
    }


    
    if (e.target.matches(".delete")){
        let isDelete = confirm(`¿Estás seguro de eliminar el Nombre ${e.target.dataset.name}?`);
        
        if (isDelete) {
            //delete - DELETE
            try {
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-type":"application/json;charset=utf-8"
                    }
                }
                let respo = await axios(`http://localhost:8000/api/codeeditor/delete/${e.target.dataset.name}`, options);
                let json = await respo.data;       
                


            } catch (error) {location.reload();
                let message = error.statusText || "Ocurrió un error";
                alert(`Error ${error.status} ${message}`);
            }
        }
    }
});
