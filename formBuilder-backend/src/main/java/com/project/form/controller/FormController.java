package com.project.form.controller;

import com.project.form.dto.FormSummary;
import com.project.form.entity.Form;
import com.project.form.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/form")
@CrossOrigin(origins = "http://localhost:4200")
public class FormController {
    
    @Autowired
    private FormService service;

    @PostMapping("/")
    public ResponseEntity<?> addFormDetails(@RequestBody Form form) {
        LocalDateTime currentDateTime = LocalDateTime.now();
        form.setCreatedAt(currentDateTime);
        form.setModifiedAt(currentDateTime);
        Form save = service.addForm(form);
        save.setFormId(form.getFormId());
        return ResponseEntity.ok(save);
    }

    @GetMapping("/")
    public ResponseEntity<?> getFormDetails() {
        List<Form> allForms = service.getAllForms();
        return ResponseEntity.ok(allForms);
    }

    @GetMapping("/getSummary")
    public ResponseEntity<?> getFormsSummary() {
        List<FormSummary> allForms = service.getFormsSummary();
        return ResponseEntity.ok(allForms);
    }

    @GetMapping("/{formId}")
    public ResponseEntity<Form> getFormDetailsById(@PathVariable String formId) {
        Form form = service.getFormById(formId);
        return ResponseEntity.ok(form);
    }

    @DeleteMapping("/{formId}")
    public ResponseEntity<?> deleteFormById(@PathVariable String formId) {
        service.deleteFormById(formId);
        return ResponseEntity.ok("Form with ID " + formId + " deleted successfully");
    }

    @PutMapping("/{formId}")
    public ResponseEntity<Form> updateFormDetails(@PathVariable String formId, @RequestBody Form updatedFormDetails) {
        Form existingForm = service.getFormById(formId);

        if (existingForm != null) {
            existingForm.setFormName(updatedFormDetails.getFormName());
            existingForm.setFormDescription(updatedFormDetails.getFormDescription());
            existingForm.setFormData(updatedFormDetails.getFormData());
            existingForm.setModifiedAt(LocalDateTime.now());
            existingForm.setIdentityTypes(updatedFormDetails.getIdentityTypes());

            Form updatedForm = service.updateForm(existingForm);
            return ResponseEntity.ok(updatedForm);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}