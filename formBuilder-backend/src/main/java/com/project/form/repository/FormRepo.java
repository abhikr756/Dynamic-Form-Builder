package com.project.form.repository;

import com.project.form.dto.FormSummary;
import com.project.form.entity.Form;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FormRepo extends MongoRepository<Form, String> {

    @Query(value = "{}", fields="{ 'formId' : 1, 'formName' : 1, 'formDescription' : 1, 'modifiedAt' : 1}")
    List<FormSummary> getFormsSummary();
}
