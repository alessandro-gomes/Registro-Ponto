package br.com.aporttsistemas.exerciciotecnico.registropontoservice;

import org.apache.commons.codec.binary.Base64;
import br.com.aporttsistemas.exerciciotecnico.model.RegistroPonto;
import br.com.aporttsistemas.exerciciotecnico.repository.RegistroPontoRepository;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistroPontoService {

    private String caminhoFoto = "C:\\Users\\aless\\OneDrive\\Área de Trabalho\\Registro Ponto Front-End\\ReactProjects\\my-app\\fotos\\";
    
    @Autowired
    RegistroPontoRepository registroPontoRepository;

    public RegistroPonto save(String latitude, String longitude) {
        RegistroPonto registroPonto = new RegistroPonto();
        registroPonto.setDataEHora(LocalDateTime.now(ZoneId.of("UTC-3")));
        registroPonto.setIpMaquina(getIp());
        registroPonto.setLatitude(latitude);
        registroPonto.setLongitude(longitude);
        registroPonto.setCaminhoImagemSalva(this.caminhoFoto);
        return registroPontoRepository.saveAndFlush(registroPonto);
    }

    public Optional<RegistroPonto> getOne(long id) {
        return registroPontoRepository.findById(id);
    }

    public List<RegistroPonto> getAll() {
        return registroPontoRepository.findAll();
    }

    public Optional<RegistroPonto> findById(long id) {
        return registroPontoRepository.findById(id);
    }

    public String getIp() {
        try {
            return InetAddress.getLocalHost().getHostAddress();
        } catch (UnknownHostException e) {
            return "Problema ao pegar IP.";
        }
    }

    public String savePicture(String imageSrc, String id) throws FileNotFoundException, IOException {
        String base64ImageString = imageSrc.replace("data:image/jpeg;base64,", "");
        byte[] imageBytes = Base64.decodeBase64(base64ImageString);
        try (FileOutputStream fos = new FileOutputStream(this.caminhoFoto + "_imagem_" + id + ".jpeg")) {
            fos.write(imageBytes);
        }
        return "Ok";
    }

    public String getCaminhoFoto() {
        return caminhoFoto;
    }

    public void setCaminhoFoto(String caminhoFoto) {
        this.caminhoFoto = caminhoFoto;
    }
}
