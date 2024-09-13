package com.project.form.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "form-details")
public class Form {

    @Id
    private String formId;
    private List<String> formData;
    private String formName;
    private String formDescription;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private List<String> identityTypes;

    public Form() {
        super();
    }

    public Form(String formId, List<String> formData, String formName, String formDescription, LocalDateTime createdAt, LocalDateTime modifiedAt, List<String> identityTypes) {
        this.formId = formId;
        this.formData = formData;
        this.formName = formName;
        this.formDescription = formDescription;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.identityTypes = identityTypes;
    }

    public List<String> getIdentityTypes() {
        return identityTypes;
    }

    public void setIdentityTypes(List<String> identityTypes) {
        this.identityTypes = identityTypes;
    }

    public List<String> getFormData() {
        return formData;
    }

    public void setFormData(List<String> formData) {
        this.formData = formData;
    }

    public String getFormId() {
        return formId;
    }

    public void setFormId(String formId) {
        this.formId = formId;
    }

    public String getFormName() {
        return formName;
    }

    public void setFormName(String formName) {
        this.formName = formName;
    }

    public String getFormDescription() {
        return formDescription;
    }

    public void setFormDescription(String formDescription) {
        this.formDescription = formDescription;
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
}
