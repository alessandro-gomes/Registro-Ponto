package br.com.aporttsistemas.exerciciotecnico.controller;

import br.com.aporttsistemas.exerciciotecnico.model.RegistroPonto;
import br.com.aporttsistemas.exerciciotecnico.registropontoservice.RegistroPontoService;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/registroPonto")
public class RegistroPontoController {

    @Autowired
    RegistroPontoService registroPontoService;

    @RequestMapping(value = "/salvar", method = RequestMethod.POST)
    public RegistroPonto save(@RequestParam(required=true) String latitude, @RequestParam(required=true) String longitude) {
        return registroPontoService.save(latitude, longitude);
    }
    
    @RequestMapping(value = "/salvarFoto/{id}", method = RequestMethod.POST)
    public String savePicture(@RequestParam(required=true) String imageSrc, @PathVariable String id) throws IOException {
        return registroPontoService.savePicture(imageSrc, id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<RegistroPonto> getOne(@PathVariable(value = "id") long id) {
        return registroPontoService.getOne(id);
    }

    @RequestMapping(value = "/lista", method = RequestMethod.GET)
    public List<RegistroPonto> getAll() {
        return registroPontoService.getAll();
    }

}
