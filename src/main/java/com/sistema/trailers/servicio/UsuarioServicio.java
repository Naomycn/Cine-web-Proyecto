package com.sistema.trailers.servicio;





import java.util.List;

import com.sistema.trailers.controladores.dto.UsuarioRegistroDTO;
import com.sistema.trailers.modelo.Usuario;


public interface UsuarioServicio {

	public Usuario guardar(UsuarioRegistroDTO registroDTO);
	
	public List<Usuario> listarUsuarios();
	
}