package com.project.form.repository;

import com.project.form.entity.FormResponse;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormResponseRepo extends MongoRepository<FormResponse,String> {
    List<FormResponse> findAllByFormId(String formId);
}
