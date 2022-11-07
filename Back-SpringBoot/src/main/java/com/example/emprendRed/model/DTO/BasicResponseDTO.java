package com.example.emprendRed.model.DTO;

import java.util.List;


public class BasicResponseDTO <T>{
  private Long totalElements;
  private List<T> data;

    public BasicResponseDTO() {
    }

    public BasicResponseDTO(Long totalElements, List<T> data) {
        this.totalElements = totalElements;
        this.data = data;
    }

    public Long getTotalElements() {
        return totalElements;
    }

    public void setTotalElements(Long totalElements) {
        this.totalElements = totalElements;
    }

    public List<T> getData() {
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }
}
