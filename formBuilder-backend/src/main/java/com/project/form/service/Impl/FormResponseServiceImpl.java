package com.project.form.service.Impl;

import com.project.form.entity.FormResponse;
import com.project.form.repository.FormResponseRepo;
import com.project.form.service.FormResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

import javax.el.MethodNotFoundException;

@Service
public class FormResponseServiceImpl implements FormResponseService {
    @Autowired
    private FormResponseRepo formResponseRepo;
    @Override
    public List<FormResponse> getAllFormResponses() {
        return formResponseRepo.findAll();
    }

    @Override
    public FormResponse getFormResponseById(String id) {
        return formResponseRepo.findById(id).orElse(null);
    }

    @Override
    public FormResponse saveFormResponse(FormResponse formResponse) {
        formResponse.setCreatedAt(LocalDateTime.now());
        formResponse.setModifiedAt(LocalDateTime.now());
        return formResponseRepo.save(formResponse);
    }

    @Override
    public void deleteFormResponse(String id) {
        formResponseRepo.deleteById(id);
    }

    @Override
    public FormResponse updatedFormResponse(String id, FormResponse updatedFormResponse) {
        if (formResponseRepo.existsById(id)) {
            FormResponse existingFormResponse = formResponseRepo.findById(id).orElse(null);
            // Keep the createdAt unchanged and update modifiedAt
            updatedFormResponse.setCreatedAt(existingFormResponse.getCreatedAt());
            updatedFormResponse.setModifiedAt(LocalDateTime.now());
            updatedFormResponse.setFormResponseId(id);
            return formResponseRepo.save(updatedFormResponse);
        } else {
            // Handle not found case
            return null;
        }
    }

        @Override
    public List<FormResponse> getFormResponsesByFormId(String formId){
        return formResponseRepo.findAllByFormId(formId);
    }
}
