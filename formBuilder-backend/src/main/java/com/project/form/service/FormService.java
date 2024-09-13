package com.project.form.service;

import com.project.form.dto.FormSummary;
import com.project.form.entity.Form;
import com.project.form.entity.FormResponse;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FormService {
    List<Form> getAllForms();

    List<FormSummary> getFormsSummary();

    Form addForm(Form form);

    Form getFormById(String id);

    void deleteFormById(String id);

    Form updateForm(Form form);


}
