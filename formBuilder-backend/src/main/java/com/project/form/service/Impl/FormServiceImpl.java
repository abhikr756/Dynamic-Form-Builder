package com.project.form.service.Impl;

import com.project.form.dto.FormSummary;
import com.project.form.entity.Form;
import com.project.form.entity.FormResponse;
import com.project.form.repository.FormRepo;
import com.project.form.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

import javax.el.MethodNotFoundException;

@Service
public class FormServiceImpl implements FormService {

    @Autowired
    FormRepo repo;

    @Override
    public List<Form> getAllForms() {
        return repo.findAll();
    }

    @Override
    public List<FormSummary> getFormsSummary() {
        return repo.getFormsSummary();
    }

    @Override
    public Form addForm(Form form) {
        return repo.save(form);
    }

    @Override
    public Form getFormById(String id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public void deleteFormById(String id) {
        repo.deleteById(id);
    }

    @Override
    public Form updateForm(Form form) {
        form.setModifiedAt(LocalDateTime.now());
        return repo.save(form);
    }
}
