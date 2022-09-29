const callGlobalDocument = document;
const $table = callGlobalDocument.querySelector(".crud-table");
const $form = callGlobalDocument.querySelector(".crud-form");
const $title = callGlobalDocument.querySelector(".crud-title");
const $template = callGlobalDocument.getElementById("crud-template").content;
const $fragment = callGlobalDocument.createDocumentFragment();

const getAll = async () => {
    try {
        let respo = await fetch("http://localhost:3000/caballeros");
        let json = await respo.json();
        if (!respo.ok) throw { status: respo.status, statusText: respo.statusText };
        console.log();
        json.forEach(element => {
            $template.querySelector(".name").textContent = element.nombre;
            $template.querySelector(".constellation").textContent = element.constelacions;
            $template.querySelector(".edit").dataset.id = element.id;
            $template.querySelector(".edit").dataset.name = element.nombre;
            $template.querySelector(".edit").dataset.constellation = element.constelacions;
            $template.querySelector(".delete").dataset.id = element.id;

            let $clone = callGlobalDocument.importNode($template, true);
            $fragment.appendChild($clone);
        });

        $table.querySelector("tbody").appendChild($fragment);

    } catch (error) {
        let message = error.statusText || "Ocurrió un error";
        $table.insertAdjacentHTML("afterend", `<p><b>Error ${error.status}: ${message}</b></p>`);
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
                        "Content-type":"application/json;charset=utf=8"
                    },
                    body: JSON.stringify({
                        name: e.target.name.value,
                        constellation: e.target.constellation.value
                    })
                }
                let respo = await fetch("http://localhost:3000/caballeros",options);
                let json = await respo.json();
                
                if (!respo.ok) throw { status: respo.status, statusText: respo.statusText };
                location.reload();


            } catch (error) {
                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${error.status}: ${message}</b></p>`);
            }
        } else {
            //Update - PUT
            try {
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-type":"application/json;charset=utf=8"
                    },
                    body: JSON.stringify({
                        name: e.target.name.value,
                        constellation: e.target.constellation.value
                    })
                }
                let respo = await fetch(`http://localhost:3000/caballeros/${e.target.id.value}`,options);
                let json = await respo.json();
                if (!respo.ok) throw { status: respo.status, statusText: respo.statusText };
            } catch (error) {
                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${error.status}: ${message}</b></p>`);
            }
        }
    }
});

callGlobalDocument.addEventListener("click", async e =>{
    if (e.target.matches(".edit")) {
        $title.textContent = "Editar Caballero";
        $form.nombre = e.target.dataset.name;
        $form.constelacions = e.target.dataset.constellation;
        $form.id = e.target.dataset.id;
    }

    if(e.target.matches(".delete")){
        let isDelete = confirm(`¿Estás seguro de eliminar el ID ${e.target.dataset.id}?`);
    }

    if(isDelete){
        //Delete - DELETE
        try {
            let options = {
                method: "DELETE",
                headers: {
                    "Content-type":"application/json;charset=utf=8"
                },
                
            }
            let respo = await fetch(`http://localhost:3000/caballeros/${e.target.dataset.id}`,options);
            let json = await respo.json();
            if (!respo.ok) throw { status: respo.status, statusText: respo.statusText };
        } catch (error) {
            let message = error.statusText || "Ocurrió un error";
            $form.insertAdjacentHTML("afterend", `<p><b>Error ${error.status}: ${message}</b></p>`);
        }
    }

})