package com.project.form.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Map;

@Document(collection = "form-response")

public class FormResponse {
    @Id
    private String formResponseId;
    private String formId;
    private String formData;
    private Map<String, String> identities;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;


    public FormResponse(String formResponseId, String formId, String formData, Map<String, String> identities, LocalDateTime createdAt, LocalDateTime modifiedAt) {
        this.formResponseId = formResponseId;
        this.formId = formId;
        this.formData = formData;
        this.identities = identities;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }

    public Map<String, String> getIdentities() {
        return identities;
    }

    public void setIdentities(Map<String, String> identities) {
        this.identities = identities;
    }

    public String getFormResponseId() {
        return formResponseId;
    }

    public void setFormResponseId(String formResponseId) {
        this.formResponseId = formResponseId;
    }

    public String getFormId() {
        return formId;
    }

    public void setFormId(String formId) {
        this.formId = formId;
    }

    public String getFormData() {
        return formData;
    }

    public void setFormData(String formData) {
        this.formData = formData;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(LocalDateTime modifiedAt) {
        this.modifiedAt = modifiedAt;
    }

    public FormResponse() {
        super();
    }
}
