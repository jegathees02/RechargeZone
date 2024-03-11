package com.rechargezone.rechargezone.dto.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HistoryResponse {
    private String date;
    private String time;
    private String rechargedBy;
    private String planAmount;
    private String planName;
    
}
