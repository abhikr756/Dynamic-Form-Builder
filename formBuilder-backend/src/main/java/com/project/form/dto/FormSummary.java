package com.project.form.dto;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "form-details")
public class FormSummary {

    @Id
    private String formId;
    private String formName;
    private String formDescription;
    private LocalDateTime modifiedAt;

    public FormSummary() {
        super();
    }

    public FormSummary(String formId, String formName, String formDescription, LocalDateTime modifiedAt) {
        this.formId = formId;
        this.formName = formName;
        this.formDescription = formDescription;
        this.modifiedAt = modifiedAt;
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

    public LocalDateTime getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(LocalDateTime modifiedAt) {
        this.modifiedAt = modifiedAt;
    }
}
