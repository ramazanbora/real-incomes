---
title: "Real Incomes 2"
layout: post
# permalink: "/real-incomes/"
---
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
<script src="https://www.gstatic.com/charts/loader.js"></script>
<script src="{{ site.baseurl }}/assets/some-script.js" type="text/javascript"></script>

{% assign country_details = site.data.country_details | group_by:"COUNTRY" | sort:"name"%}
{% assign currency_iso = site.data.currency_iso | group_by:"COUNTRY" %}



## COOL TABLES - 2



{% for country in country_details %}



<hr>
  <details {% if forloop.first %} {% endif %} >
    <summary>{{ country.name }}</summary>

    <h3> {{ country.name }} Geographic and Economic Classification*: </h3>

    {% include get_country_region_table.html cntry=country.name %}

<h6>*Classification is based on the year 2019.</h6>

<br>
<hr class="small">
<br>
    {% assign country_filtered =  country.items | where: "D_BENCHC","1" %}

        <h3> {{ country.name }} Participation in Benchmark </h3>
        {% assign country_filtered_size = country_filtered | size %}
    {% if  country_filtered_size == 0 %}
      <h4>Note: {{ country.name }} did not participate in any of the benchmarks.</h4>
    {% endif %}

    <table>
      {% for row in country_filtered  %}
        {% if forloop.first %}
          <tr>
            {% for pair in row%}
              {% if pair[0] == "CODE_WB" or pair[0] == "COUNTRY" or pair[0] == "YEAR" %}
                  <th>{{ pair[0] }}</th>
              {% endif %}

            {% endfor %}
          </tr>
        {% endif %}

        <tr>
        {% for pair in row %}


          {% if pair[0] == "CODE_WB" or pair[0] == "COUNTRY" or pair[0] == "YEAR" %}
            <td>
              {{ pair[1] }}
            </td>
          {% endif %}

        {% endfor %}
        </tr>
      {% endfor %}
    </table>

    <br>
    <hr class="small">
    <br>


    <h3> {{ country.name }} Historical Currencies </h3>
    {% include get_country_currency_table.html cntry=country.name %}

{% comment %}
    <div id="{{ country.name }}">
      "Tables loading..."
    </div>
{% endcomment %}

<br>
<hr class="small">
<br>
      <h3> {{ country.name }} Exchange Rate Progression ($/current currency) </h3>

      {% capture exchange_rates_XR -%}
        {% for row in country.items -%}
          {{ row.XR -}}
          {{ "," -}}
        {% endfor %}
      {% endcapture %}
      {% assign exchange_rates_XR = exchange_rates_XR | pop: 1 %}

      {% capture exchange_rates_YEAR -%}
        {% for row in country.items -%}
          {{ row.YEAR -}}
          {{ "," -}}
        {% endfor %}
      {% endcapture %}

      {% assign exchange_rates_YEAR = exchange_rates_YEAR | pop: 1 %}

      <canvas id="myChart_{{ country.name }}_XR" style="width:100%;max-width:840px"></canvas>

      <script>
        createChart("myChart_{{ country.name }}_XR",[{{ exchange_rates_YEAR }}],[{{ exchange_rates_XR }}])
      </script>
<br>


{% comment %}
<hr class="small">
<br>
      <h3> {{ country.name }} Population Progression </h3>

            {% capture pop -%}
              {% for row in country.items -%}
                {{ row.POPULATION -}}
                {{ "," -}}
              {% endfor %}
            {% endcapture %}
            {% assign pop = pop | pop: 1 %}

            {% capture pop_YEAR -%}
              {% for row in country.items -%}
                {{ row.YEAR -}}
                {{ "," -}}
              {% endfor %}
            {% endcapture %}

            {% assign pop_YEAR = pop_YEAR | pop: 1 %}

            <canvas id="myChart_{{ country.name }}_POP" style="width:100%;max-width:840px"></canvas>

            <script>
              createChart("myChart_{{ country.name }}_POP",[{{ pop_YEAR }}],[{{ pop }}])
            </script>

{% endcomment %}




  </details>
{% endfor %}






{% comment %}

{% for country in currency_iso %}
  <script>
    createTable("{{ country.name }}");
  </script>
{% endfor %}

{% endcomment %}



{% comment %}

{% for country in currency_iso %}
  <script>
    var input_text = `
    <table>
      {% for row in country.items %}
        {% if forloop.first %}
          <tr>
            {% for pair in row%}
              <th>{{ pair[0] }}</th>
            {% endfor %}
          </tr>
        {% endif %}

        {% tablerow pair in row %}
          {{ pair[1] }}
        {% endtablerow %}

      {% endfor %}
    </table>
    `;

    createTable2({{ country | jsonify }},input_text);
  </script>
{% endfor %}





<table>
  {% for row in country_iso.items %}
    {% if forloop.first %}
      <tr>
        {% for pair in row%}
          <th>{{ pair[0] }}</th>
        {% endfor %}
      </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}

  {% endfor %}
</table>



## ayrilin

{% for country in currency_iso %}
  <details {% if forloop.first %} open {% endif %} >
    <summary>{{ country.name }}</summary>
    <table>
      {% for row in country.items %}
        {% if forloop.first %}
          <tr>
            {% for pair in row%}
              <th>{{ pair[0] }}</th>
            {% endfor %}
          </tr>
        {% endif %}

        {% tablerow pair in row %}
          {{ pair[1] }}
        {% endtablerow %}

      {% endfor %}
    </table>
  </details>
{% endfor %}


{% endcomment %}

<script>
