package com.example.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.ProfesorModel;

@Repository
public interface ProfesorRepository extends CrudRepository<ProfesorModel, Long>{
    
}
