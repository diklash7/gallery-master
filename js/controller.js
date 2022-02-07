'use strict';

function oninit() {
    createProjects();
    renderProjects();
}

function renderProjects() {
    var projs=getProjsForDisplay()
    const strHTML = projs.map((proj) => {
        return`<div class="col-md-4 col-sm-6 portfolio-item" >
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="onOpenModal('${proj.id}')">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src="${proj.img}" alt="">
            </a>
            <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text-muted">Illustration</p>
            </div>
        </div>`;
    });


    $('.proj-list').html(strHTML);
}

function updateModal(proj) {
    const strHTML = `
    <h2>${proj.name}</h2>
    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
      blanditiis
      dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
      cupiditate,
      maiores repudiandae, nostrum, reiciendis facere nemo!</p>
    <ul class="list-inline">
      <li>Date: January 2017</li>
      <li>Client: Threads</li>
      <li>Category: Illustration</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Project</button>
    `
    $('.modal-body').html(strHTML)
}

function onOpenModal(projId) {
    const proj = getProject(projId)
    updateModal(proj)
}

// steps: 
// 1. onclick - pass the project and call updateModal function
// 2. updateModal will render the relevant proj detail and injett it to the modal-body