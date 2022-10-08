package br.com.saxmid.resource;

import br.com.saxmid.model.Funcionario;
import br.com.saxmid.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(maxAge = 1300)
@RestController
@RequestMapping("/api/funcionarios")
public class FuncionarioResource {

    @Autowired
    private FuncionarioService funcionarioService;

    @PostMapping
    public Funcionario salvar(@RequestBody Funcionario funcionario){
        return funcionario = funcionarioService.salvar(funcionario);
    }

    @GetMapping
    public List<Funcionario> listar(){
        return funcionarioService.listar();
    }

    @DeleteMapping("{id}")
    public void deletar(@PathVariable Integer id){
        funcionarioService.deletar(id);
    }

    @PutMapping({"id"})
    public Funcionario atualizar(@RequestBody Funcionario funcionario) throws Exception {
        return funcionarioService.atualizar(funcionario);
    }

}
