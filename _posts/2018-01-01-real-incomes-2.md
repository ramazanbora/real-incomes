---
title: "Real Incomes"
layout: post
# permalink: "/real-incomes/"
---
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
<script src="https://www.gstatic.com/charts/loader.js"></script>
<script src="{{ site.baseurl }}/assets/some-script.js" type="text/javascript"></script>

{% assign country_details = site.data.country_details | group_by:"COUNTRY" %}
{% assign currency_iso = site.data.currency_iso | group_by:"COUNTRY" %}



## cool tables

{% for country in country_details %}
  {% assign country_iso = currency_iso | find: "name" , country.name %}

<hr>
  <details {% if forloop.first %} open {% endif %} >
    <summary>{{ country.name }}</summary>

    <h3> {{ country.name }} Historical Currencies </h3>

    <div id="{{ country.name }}">
      "Tables loading..."
    </div>

<hr class="small">

      <h3> {{ country.name }} Exchange Rate Progression </h3>

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

<hr class="small">

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




  </details>
{% endfor %}






{% comment %}

{% for country in currency_iso %}
  <script>
    createTable("{{ country.name }}");
  </script>
{% endfor %}

{% endcomment %}



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


{% comment %}


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
