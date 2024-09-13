package com.project.form.controller;

import com.project.form.entity.FormResponse;
import com.project.form.service.FormResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/form-responses")
@CrossOrigin(origins = "http://localhost:4200")
public class FormResponseController {

    @Autowired
    private FormResponseService formResponseService;

    @GetMapping("/")
    public ResponseEntity<List<FormResponse>> getAllFormResponses() {
        List<FormResponse> allFormResponses = formResponseService.getAllFormResponses();
        return ResponseEntity.ok(allFormResponses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FormResponse> getFormResponseById(@PathVariable String id) {
        FormResponse formResponse = formResponseService.getFormResponseById(id);
        return ResponseEntity.ok(formResponse);
    }

    @GetMapping("/formId/{formId}")
    public ResponseEntity<List<FormResponse>> getFormResponsesByFormId(@PathVariable String formId) {
        List<FormResponse> formResponses = formResponseService.getFormResponsesByFormId(formId);
        return ResponseEntity.ok(formResponses);
    }

    @PostMapping("/")
    public ResponseEntity<FormResponse> saveFormResponse(@RequestBody FormResponse formResponse) {
        FormResponse savedFormResponse = formResponseService.saveFormResponse(formResponse);
        return ResponseEntity.ok(savedFormResponse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FormResponse> updateFormResponse(@PathVariable String id,
            @RequestBody FormResponse updatedFormResponse) {
        FormResponse updatedResponse = formResponseService.updatedFormResponse(id, updatedFormResponse);
        return ResponseEntity.ok(updatedResponse);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFormResponse(@PathVariable String id) {
        formResponseService.deleteFormResponse(id);
        return ResponseEntity.ok("Form response with ID " + id + " deleted successfully");
    }

}
