package com.sistema.trailers.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;


import com.sistema.trailers.modelo.Usuario;


public interface UsuarioRepositorio extends JpaRepository<Usuario, Long>{

	
	
}