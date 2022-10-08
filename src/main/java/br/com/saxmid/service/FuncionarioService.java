package br.com.saxmid.service;

import br.com.saxmid.model.Funcionario;
import br.com.saxmid.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    public Funcionario salvar(Funcionario funcionario){
        return funcionarioRepository.save(funcionario);
    }

    public List<Funcionario> listar(){
        return funcionarioRepository.findAll();
    }

    public void deletar(Integer id){
        funcionarioRepository.deleteById(id);
    }

    public Funcionario atualizar(Funcionario funcionario) throws Exception {
        if(funcionario.getId()==null){
            throw new Exception("ID não encontrado");
        }
        return funcionarioRepository.save(funcionario);
    }

}
