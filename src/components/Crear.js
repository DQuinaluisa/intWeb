import React, { Component } from 'react'

export default class Crear extends Component {
    render() {
        return (
            <div class="container">
        <div class="row ">
            <div class="col-lg-2  ">                
            </div>
            <div class="col-lg-8">
            <div class="card card-signin my-5">
                    <div class="card-body">
                    <h5 class="card-title text-center">Crear Recicladora</h5>
                        <form class="form-signin">
                            
                                <div class="form-group row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Recicladora</label>
                                    <div class="col-sm-10">
                                    <input class="form-control form-control-lg"  placeholder="Nombre de la Recicladora"/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Contactos </label>
                                    <div class="col-sm-10">
                                    <input  class="form-control form-control-lg" placeholder="Numeros de contacto"/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Direccion</label>
                                    <div class="col-sm-10">
                                    <input  class="form-control form-control-lg" placeholder="Nombre de la Recicladora"/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Descripcion</label>
                                    <div class="col-sm-10">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                               

                                    
                            
                            

                            
                            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Crear</button>
                            <hr class="my-4"/>
                            
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-2">
            </div>
        </div>
   
 </div>

        )
    }
}
