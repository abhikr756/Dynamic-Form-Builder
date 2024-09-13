package com.project.form.service;

import com.project.form.entity.FormResponse;

import java.util.List;

public interface FormResponseService {

    List<FormResponse> getAllFormResponses();
    FormResponse getFormResponseById(String id);
    FormResponse saveFormResponse(FormResponse formResponse);
    void deleteFormResponse(String id);
    FormResponse updatedFormResponse(String id, FormResponse updatedFormResponse);
    List<FormResponse> getFormResponsesByFormId(String formId);



}
